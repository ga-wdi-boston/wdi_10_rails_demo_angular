class ProductsController < ApplicationController

  # GET /articles.json
  def index
    @products = Product.all
    render json: @products
  end

end
