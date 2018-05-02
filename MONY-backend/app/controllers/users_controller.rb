class UsersController < ApplicationController

  def create
    puts params
    @user = User.new(name: params[:username], password: params[:password])
    if @user.save
      puts @user.id
      token= JWT.encode({user_id: @user.id}, '8f303a373fd47dd60323d3e26c881185da170580096136d99a8dcf298bd73029363da940a55e8f0001947a7717e66af51c1fe2f2aea60090f6a02463a3c26c6f', 'HS256')
      render json: { user: @user, token: token }, status: 200
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
