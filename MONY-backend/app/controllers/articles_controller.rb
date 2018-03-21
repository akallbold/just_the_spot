class ArticlesController < ApplicationController

  def index
    @articles = Article.all
    render json: @articles, status: 200
  end

  # def create
  #   render json: @article, status: 200
  # end

  def show
    render json: @article, status: 200
  end


end
