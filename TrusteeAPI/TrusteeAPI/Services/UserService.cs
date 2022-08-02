namespace TrusteeAPI.Services
{
    public class UserService
    {
        IConfiguration _config;
        public UserService(IConfiguration config)
        {
            _config = config;
        }

        public bool Login(string user, string password)
        {
            var admin = _config.GetSection("AdminCredentials").GetSection("User").Value;
            var adminPassword = _config.GetSection("AdminCredentials").GetSection("Password").Value;

            if (user == admin && password == adminPassword)
            {
                return true;
            }

            return false;
        }
    }
}
