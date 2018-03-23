Rails.application.routes.draw do
  resources :user_articles
  resources :user_places
  resources :users
  resources :articles
  resources :places

  post '/login', to: 'users#login'
  get '/article', to: 'articles#index'
  post '/users/:id/articles', to: 'user_articles#create'
  get '/users/:id/articles', to: 'user_places#index'
  # post '/users/:id/places', to: 'user_places#create'
  get '/users/:id/places', to: 'user_articles#show_places'
  post '/places/:id', to: 'places#update'
  get '/places/:id', to: 'places#show'
  get '/place', to: 'places#index'
  post '/users/:id/places/', to: 'user_places#create'
  get '/users/:id/places', to: 'user_places#index'

  get 'article/:id/places', to: 'places#select'
end
