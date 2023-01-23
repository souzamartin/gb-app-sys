class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: Review.all, status: :ok
    end
end