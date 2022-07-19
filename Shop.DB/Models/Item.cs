using System;
using System.Collections.Generic;

namespace Shop.DB.Models
{
    public partial class Item
    {
        public Item()
        {
            OrdersDetails = new HashSet<OrdersDetail>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Decription { get; set; }
        public bool IsActive { get; set; }
        public int PriceId { get; set; }

        public virtual Price Price { get; set; } = null!;
        public virtual ICollection<OrdersDetail> OrdersDetails { get; set; }
    }
}
