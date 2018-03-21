class UsersController < ApplicationController

  def create
    render json: @user, status: 200
  end

  def show
    render json: @user, status: 200
  end

  def login
    render json: @user, status: 200
  end

end
