source 'https://rubygems.org'
gem "capistrano", "3.4"
gem "json", "~>1.8"


# Load gem dependencies from the theme
theme_gemfile = File.join(File.dirname(__FILE__), "web/themes/gesso/Gemfile")
if File.exists?(theme_gemfile)
  puts "Loading #{theme_gemfile} ..." if $DEBUG # `ruby -d` or `bundle -v`
  instance_eval File.read(theme_gemfile)
end

