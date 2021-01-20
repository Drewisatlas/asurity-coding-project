using System.ComponentModel.DataAnnotations;

namespace AsurityProjectBackend.Models
{
    public class ContactFrequency
    {
        [Key]
        public long Id { get; set; }
        public string Frequency { get; set; }
    }
}
