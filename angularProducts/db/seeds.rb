# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
product = Product.create( name: "Boot", description: "Shiny and black", price: 108.76)
puts "created product: #{product.inspect}"
product = Product.create( name: "Shoe Horn", description: "About 3 feet long, with a built in radio", price: 6.24)
puts "created product: #{product.inspect}"
