namespace TrusteeAPI.Services
{
    public interface IUserService
    {
        bool Login(string user, string password);
    }
}
