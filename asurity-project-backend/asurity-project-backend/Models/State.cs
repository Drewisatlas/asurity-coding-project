using System.ComponentModel.DataAnnotations;

namespace AsurityProjectBackend.Models
{
    public class State
    {
        [Key]
        public long Id { get; set; }
        public string FullName { get; set; }
        public string Abbreviation { get; set; }
    }
}
