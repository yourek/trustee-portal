using TrusteeAPI.Models.Entities;

namespace TrusteeAPI.Models.TransportObjects
{
    public class AuthResponse
    {
        public string Status { get; set; } = "Not Authenticated";
        public User? User { get; set; } = null;
    }
}
