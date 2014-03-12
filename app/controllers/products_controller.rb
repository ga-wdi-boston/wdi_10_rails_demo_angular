class ProductsController < ApplicationController

  # GET /articles.json
  def index
    @products = Product.all
    render json: @products
  end

  def show
    @product = Product.find(params[:id])
    render json: @product
  end

  def create
    new_product = Product.new(product_params)
    if new_product.valid?
      new_product.save!
    else
      render 'public/422', :status => 422
    end
    render json: new_product
  end

  private

  def product_params
    params.require(:new_product).permit(:name, :description, :price)
  end
end
