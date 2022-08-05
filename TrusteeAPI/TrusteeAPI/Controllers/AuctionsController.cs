using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TrusteeAPI.Models.Entities;
using TrusteeAPI.Models.TransportObjects;
using TrusteeAPI.Services;

namespace TrusteeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AuctionsController : ControllerBase
    {
        private readonly ILogger<ArticlesController> _logger;
        private readonly AuctionsService _auctionsService;
        public AuctionsController(
            ILogger<ArticlesController> logger,
            AuctionsService auctionsService)
        {
            _logger = logger;
            _auctionsService = auctionsService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Auction>>> Get()
        {
            var result = await _auctionsService.GetAsync();

            return result;
        }

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Auction>> Get(string id)
        {
            var result = await _auctionsService.GetAsync(id);

            if (result is null)
            {
                return NotFound();
            }

            return result;
        }

        [HttpPost]
        public async Task<IActionResult> Post(NewAuction newAuction)
        {
            Auction article = new()
            {
                Title = newAuction.Title,
                Date = newAuction.Date,
                Body = newAuction.Body,
                Price = newAuction.Price,
                Attachement = newAuction.Attachement
            };

            await _auctionsService.CreateAsync(article);

            return CreatedAtAction(nameof(Get), new { title = newAuction.Title }, newAuction);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Auction updatedObject)
        {
            var article = await _auctionsService.GetAsync(id);

            if (article is null)
            {
                return NotFound();
            }

            article.Id = updatedObject.Id;

            await _auctionsService.UpdateAsync(id, updatedObject);

            return Ok();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var article = _auctionsService.GetAsync(id);

            if (article is null)
            {
                return NotFound();
            }

            await _auctionsService.RemoveAsync(id);

            return Ok();
        }
    }
}
