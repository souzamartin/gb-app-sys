Rails.application.routes.draw do
  resources :users, only: [:create, :update, :destroy]
  resources :entities, only: [:index, :create]
  resources :jobs, only: [:index, :create, :update, :destroy]
  resources :job_entities, only: [:create]
  get '/myjobs', to: 'jobs#customer_index'
 
  post '/login', to: 'sessions#create'
  get '/auth', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
end
