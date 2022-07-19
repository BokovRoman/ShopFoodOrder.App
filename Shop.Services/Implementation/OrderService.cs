using Shop.DB.Models;
using Shop.Domain.Models;
using Shop.Services.Interfaces;

namespace Shop.Services.Implementation
{
    public class OrderService : IOrderService
    {
        public async Task AddOrder(OrderModel model)
        {

            await Task.Run(() =>
            {
                var context = new FoodserviceDbContext();

                var customer = new Customer
                {
                    Address = model.CustomerAddress,
                    Name = model.CustomerName,
                    Number = model.CustomerNumber,
                    Email = model.CustomerEmail
                };

                context.Customers.Add(customer);
                context.SaveChanges();

                int customerId = customer.Id;

                var order = new Order
                {
                    CustomerId = customerId
                };

                context.Orders.Add(order);
                context.SaveChanges();

                int orderId = order.Id;

                foreach (var item in model.Items)
                {
                    var orderDetails = new OrdersDetail
                    {
                        ItemId = item.Id,
                        OrderId = order.Id,
                        Quantity = item.Quantity
                    };

                    context.OrdersDetails.Add(orderDetails);
                    context.SaveChanges();
                }

                context.Dispose();

            });

        }
    }
}
