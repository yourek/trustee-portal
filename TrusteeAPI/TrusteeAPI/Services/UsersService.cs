using TrusteeAPI.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TrusteeAPI.Models.Entities;
using TrusteeAPI.Models.TransportObjects;

namespace TrusteeAPI.Services
{
    public class UsersService
    {
        private readonly IMongoCollection<User> _collection;

        public UsersService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            var mongoClient = new MongoClient(
                mongoDBSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                mongoDBSettings.Value.DatabaseName);

            _collection = mongoDatabase.GetCollection<User>(
                mongoDBSettings.Value.UsersCollectionName);
        }

        public async Task<List<User>> GetAsync() =>
        await _collection.Find(_ => true).ToListAsync();

        public async Task<User?> GetAsync(string id) =>
            await _collection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task<User?> GetByCredentialsAsync(string user, string password) =>
            await _collection.Find(x => x.UserName == user && x.Password == password).FirstOrDefaultAsync();

        public async Task CreateAsync(User newUser) =>
            await _collection.InsertOneAsync(newUser);

        public async Task UpdateAsync(string id, User updatedUser) =>
            await _collection.ReplaceOneAsync(x => x.Id == id, updatedUser);

        public async Task RemoveAsync(string id) =>
            await _collection.DeleteOneAsync(x => x.Id == id);
    }
}
