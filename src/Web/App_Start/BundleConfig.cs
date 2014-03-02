using System.Web;
using System.Web.Optimization;

namespace Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/js/lib").Include("~/Scripts/angular.js").IncludeDirectory("~/Scripts/", "*.js"));

            bundles.Add(new ScriptBundle("~/js/app").Include("~/js/app/app.js").IncludeDirectory("~/app", "*.js", true));

            bundles.Add(new StyleBundle("~/css/lib").IncludeDirectory("~/Public/bootstrap/css", "*.css"));
        }
    }
}
