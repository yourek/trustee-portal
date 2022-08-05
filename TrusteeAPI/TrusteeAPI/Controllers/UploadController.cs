using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TrusteeAPI.Models.TransportObjects;
using TrusteeAPI.Services;

namespace TrusteeAPI.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/[controller]")]
    public class UploadController : ControllerBase
    {
        private IBlobService _blobService;

        public UploadController(IBlobService blobService)
        {
            _blobService = blobService;
        }

        [HttpPost]
        public async Task<ActionResult<UploadResponse>> Upload(IFormFile file)
        {
            if (file == null)
            {
                return BadRequest();
            }

            var result = await _blobService.UploadFileBlobAsync(
                "testfilecontainer",
                file.OpenReadStream(),
                file.ContentType,
                file.FileName);

            var filePath = result.AbsoluteUri;

            return Ok(new UploadResponse { Path = filePath });
        }
    }
}
