class AuthController < ApplicationController

  def login
    byebug
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: { id: user.id, username: user.username }
    else
      render json: { error: "User is invalid" }, status: 401
    end
  end


end
