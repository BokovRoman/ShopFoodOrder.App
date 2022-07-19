using Shop.Domain.Models;

namespace Shop.Services.Interfaces
{
    public interface IShopService
    {
        Task<IEnumerable<ShopModel>> GetShops();
    }
}
