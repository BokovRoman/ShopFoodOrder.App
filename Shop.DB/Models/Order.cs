using System;
using System.Collections.Generic;

namespace Shop.DB.Models
{
    public partial class Order
    {
        public Order()
        {
            OrdersDetails = new HashSet<OrdersDetail>();
        }

        public int CustomerId { get; set; }
        public int Id { get; set; }

        public virtual Customer Customer { get; set; } = null!;
        public virtual ICollection<OrdersDetail> OrdersDetails { get; set; }
    }
}
