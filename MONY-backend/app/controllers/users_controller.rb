class UsersController < ApplicationController

  def create
    puts params
    @user = User.new(name: params[:username], password: params[:password])
    puts @user
    if @user.save
      render json: @user, status: 200
    else
      render json: @user.errors, status: 401
    end
  end

  def show
    render json: @user, status: 200
  end

  def login
    render json: @user, status: 200
  end

end
