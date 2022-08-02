using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TrusteeAPI.Models.TransportObjects;
using TrusteeAPI.Services;

namespace TrusteeAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        IAuthService _authService;

        public AuthController(IAuthService authService) {
            _authService = authService;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<AuthResponse> Authenticate([FromBody] AuthRequest requestBody)
        {
            var user = await _authService.Login(requestBody.User, requestBody.Password);

            if (user != null)
            {
                return new AuthResponse() { Status = "Authenticated" };
            }
            
            return new AuthResponse();
        }
    }
}
