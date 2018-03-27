class AuthController < ApplicationController

  def login
    user = User.find_by(name: params[:username])
    if user && user.authenticate(params[:password])
      token= JWT.encode({user_id:user.id}, ENV['JWT_SECRET'], ENV["JWT_ALGORITHM"])
      render json: { user: user, token: token }, status: 200
    else
      render json: { error: "User is invalid" }, status: 401
    end
  end

  def decode
    token = params[:token]
    if token
      user_id = JWT.decode(token, ENV['JWT_SECRET'])
      user = User.find_by(id: user_id[0]["user_id"])

      if user
          render json: { user: user}, status: 200
      else
        render json: { error: "User is invalid" }, status: 400
      end
    else
      render json: { error: "Token Error" }, status: 400
    end
  end

end
