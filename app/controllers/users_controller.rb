class UsersController < ApplicationController
    def create
        render json: User.create!(new_user_params), status: :created
    end

    private
    def new_user_params
        params.permit(
            :email,
            :firstname,
            :lastname,
            :password,
            :password_confirmation,
            :phone,
            :address
        )
    end
end
