using LearnLanguages.Data.Entities.LanguageEntity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LearnLanguages.Data.Impl;
public class Context : IdentityDbContext
{
    #region Constructors

    public Context(DbContextOptions<Context> options) : base(options) { }

    #endregion Constructors

    #region Public properties

    public DbSet<Language> Languages { get; set; }

    #endregion Public properties

    #region Methods 

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseLazyLoadingProxies();
        base.OnConfiguring(optionsBuilder);
    }

    #endregion Methods
}
