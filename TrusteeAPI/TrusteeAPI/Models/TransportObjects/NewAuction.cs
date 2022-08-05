namespace TrusteeAPI.Models.TransportObjects
{
    public class NewAuction
    {
        public string Title { get; set; } = null!;
        public string? Body { get; set; }
        public string? Date { get; set; }
        public string? Price { get; set; }
        public string? Attachement { get; set; }
    }
}
