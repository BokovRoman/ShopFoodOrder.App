using System;
using System.Collections.Generic;

namespace Shop.DB.Models
{
    public partial class Price
    {
        public Price()
        {
            Items = new HashSet<Item>();
        }

        public int Id { get; set; }
        public int Cost { get; set; }

        public virtual ICollection<Item> Items { get; set; }
    }
}
