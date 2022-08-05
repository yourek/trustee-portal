using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TrusteeAPI.Models;
using TrusteeAPI.Models.Entities;

namespace TrusteeAPI.Services
{
    public class AuctionsService
    {
        private readonly IMongoCollection<Auction> _collection;

        public AuctionsService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            var mongoClient = new MongoClient(
                mongoDBSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                mongoDBSettings.Value.DatabaseName);

            _collection = mongoDatabase.GetCollection<Auction>(
                mongoDBSettings.Value.AuctionsCollectionName);
        }

        public async Task<List<Auction>> GetAsync() =>
        await _collection.Find(_ => true).ToListAsync();

        public async Task<Auction?> GetAsync(string id) =>
            await _collection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Auction newObject) =>
            await _collection.InsertOneAsync(newObject);

        public async Task UpdateAsync(string id, Auction updated) =>
            await _collection.ReplaceOneAsync(x => x.Id == id, updated);

        public async Task RemoveAsync(string id) =>
            await _collection.DeleteOneAsync(x => x.Id == id);
    }
}
