class UserArticlesController < ApplicationController

  def index
    @user = User.find(params[:id])
    @user_articles = @user.articles
    render json: @user_articles, status: 200
  end


  private
  # 
  # def user_article_params
  #   params.require(:user_place).permit(:place_id, :user_id)
  # end



end
