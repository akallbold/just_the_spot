class UserPlacesController < ApplicationController

def index
  @user = User.find(params[:user_id])
  @user_places = @user.places
  render json: @user_places, status: 200
end

# def show_places
#   @user = User.find(params[:id])
#   @user_places = []
#   @user.articles.each {|article| @user_places << article.places}
#   @user_places.flatten!
#   render json: @user_places, status: 200
# end

def create
  @user = User.find(params[:user_id])
  byebug
  @place = Place.find(params[:place_id])
  User.places << @place
end

def destroy
  @user = User.find(params[:id])
  @user.places.delete(params[:id])
end


# private
#
# def user_place_params
#   params.require(:user_place).permit(:place_id, :user_id)
# end


end
