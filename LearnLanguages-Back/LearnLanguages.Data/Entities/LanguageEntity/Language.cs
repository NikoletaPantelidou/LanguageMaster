using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LearnLanguages.Data.Entities.LanguageEntity;

[Table("Languages")]
public class Language
{
    [Key]
    public required string Code { get; set; }

    public required string Name { get; set; }

    public required string Flag { get; set; }
}
