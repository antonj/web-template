# Guardfile
# More info at https://github.com/guard/guard#readme

group :init_deps do
  guard :shell do
    watch(%r{package.json}) {`npm install`}
  end

  guard :shell do
    watch(%r{bower.json}) {`node_modules/.bin/bower install`}
  end
end

group :prod do
  guard :shell do
    watch(%r{app/js/.+(?<!min)\.(js)}) { `node_modules/.bin/r.js -o config-require.js` }
  end
end

group :dev do
  # guard 'sass', :input => 'app/css', :output => 'app/css'
  
  guard 'compass', :configuration_file => "config-compass.rb" do
    watch(%r'app/css/(.*)\.s[ac]ss')
  end
  
  guard 'coffeescript', :input => 'app/js'
  
  guard 'livereload' do
    watch %r{app/.+\.(css|js|html)}
    watch %r{tests/.+\.(css|js|html)}
  end
end

scope :group => :dev
