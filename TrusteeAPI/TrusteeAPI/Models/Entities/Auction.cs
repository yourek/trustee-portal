using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace TrusteeAPI.Models.Entities
{
    public class Auction
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = null!;

        [BsonElement("Title")]
        [JsonPropertyName("Title")]
        public string Title { get; set; } = null!;
        public string? Body { get; set; }
        public string? Date { get; set; }
        public string? Price { get; set; }
        public string? Attachement { get; set; }
    }
}
