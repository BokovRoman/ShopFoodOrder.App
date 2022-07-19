using System;
using System.Collections.Generic;

namespace Shop.DB.Models
{
    public partial class OrdersDetail
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ItemId { get; set; }
        public int Quantity { get; set; }

        public virtual Item Item { get; set; } = null!;
        public virtual Order Order { get; set; } = null!;
    }
}
