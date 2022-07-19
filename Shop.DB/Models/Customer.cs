﻿using System;
using System.Collections.Generic;

namespace Shop.DB.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Orders = new HashSet<Order>();
        }

        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Number { get; set; } = null!;
        public string Address { get; set; } = null!;
        public int Id { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
