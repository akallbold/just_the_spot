class PlacesController < ApplicationController

  def index
    @places = Place.all
    render json: @places, status: 200
  end

  # def create
  #   render json: @place, status: 200
  # end

  # def show
  #   render json: @place, status: 200
  # end

  def update
    @place = Place.find(params[:id])
    @place.update(latitude: params[:latitude], longitude: params[:longitude], address:params[:address] )
    render json: @place, status: 200
  end

  def select
    @article = Article.find(params[:id])
    @places = @article.places
    render json: @places, status: 200
  end

  def show
    @place = Place.find(params[:id])
    render json: @place, status: 200
  end



  private
  #
  # def place_params
  #   params.require(:place).permit(:place_id, :address, :geoLocation)
  # end



end
