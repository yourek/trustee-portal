using TrusteeAPI.Models.Entities;

namespace TrusteeAPI.Services
{
    public interface IAuthService
    {
        Task<User?> Login(string user, string password);
    }
}
