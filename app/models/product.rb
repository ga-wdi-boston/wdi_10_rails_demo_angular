class Product < ActiveRecord::Base
  validates :price, presence: true, length: { minimum: 1, maximum: 250 }
  validates :description, presence: true
end
