class AuthController < ApplicationController

  def login
    user = User.find_by(name: params[:username])
    if user && user.authenticate(params[:password])
      token= JWT.encode({user_id:user.id}, '8f303a373fd47dd60323d3e26c881185da170580096136d99a8dcf298bd73029363da940a55e8f0001947a7717e66af51c1fe2f2aea60090f6a02463a3c26c6f', 'HS256')
      render json: { user: user, token: token }, status: 200
    else
      render json: { error: "User is invalid" }, status: 401
    end
  end

  def decode
    token = params[:token]
    # byebug
    if token
      user_id = JWT.decode(token, '8f303a373fd47dd60323d3e26c881185da170580096136d99a8dcf298bd73029363da940a55e8f0001947a7717e66af51c1fe2f2aea60090f6a02463a3c26c6f', 'HS256')
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
