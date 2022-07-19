using Shop.Domain.Models;

namespace Shop.Services.Interfaces
{
    public interface IOrderService
    {
        Task AddOrder(OrderModel model);
    }
}
