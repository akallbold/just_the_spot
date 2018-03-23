class UserArticlesController < ApplicationController


  def create
    @user = User.find(params[:id])
    @article = Article.find(params[:article_id])
    @user.articles << @article
    render json: @user.articles, status: 200
  end

  def index
    @user = User.find(params[:id])
    @user_articles = @user.articles
    render json: @user_articles, status: 200
  end

  # def show_places
  #   @user = User.find(params[:id])
  #   @user_places = []
  #   @user.articles.each {|article| @user_places << article.places}
  #   @user_places.flatten!
  #   render json: @user_places, status: 200
  # end


  private
  #
  # def user_article_params
  #   params.require(:user_place).permit(:place_id, :user_id)
  # end



end
