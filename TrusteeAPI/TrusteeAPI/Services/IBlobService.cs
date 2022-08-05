using Azure.Storage.Blobs;

namespace TrusteeAPI.Services
{
    public interface IBlobService
    {
        public Task<Uri> UploadFileBlobAsync(string blobContainerName, Stream content, string contentType, string fileName);
    }
}