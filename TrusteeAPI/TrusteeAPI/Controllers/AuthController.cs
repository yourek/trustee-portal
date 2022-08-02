using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TrusteeAPI.Models.TransportObjects;
using System.Configuration;
using TrusteeAPI.Services;

namespace TrusteeAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        IConfiguration _config;
        UserService _userService;

        public AuthController(IConfiguration config, UserService userService) {
            _config = config;
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost]
        public AuthResponse Authenticate([FromBody] AuthRequest requestBody)
        {

            var isAuthenticated = _userService.Login(requestBody.User, requestBody.Password);

            if (isAuthenticated)
            {
                return new AuthResponse() { Status = "Authenticated" };
            }
            
            return new AuthResponse();
        }
    }
}
