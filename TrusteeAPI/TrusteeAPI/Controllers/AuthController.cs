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

        UserService _userService;

        public AuthController(UserService userService) {
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
