using TrusteeAPI.Models.Entities;

namespace TrusteeAPI.Services
{
    public class AuthService : IAuthService
    {
        UsersService _usersService;
        public AuthService(UsersService usersService)
        {
            _usersService = usersService;
        }

        public async Task<User?> Login(string user, string password)
        {
            var userDb = await _usersService.GetByCredentialsAsync(user, password);

            if (userDb != null)
            {
                return userDb;
            }

            return null;
        }
    }
}
