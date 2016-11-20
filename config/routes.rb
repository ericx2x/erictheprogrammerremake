Rails.application.routes.draw do
  resources :posts
  resources :sessions, only: [:new, :create, :destroy]
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  resources :users
  get 'page/index'
  get 'portfolio', to: 'portfolio#index', as: 'portfolio'
  get 'bio', to: 'bio#index', as: 'bio'
  get 'simplegrid', to: 'simplegrid#index', as: 'simplegrid'
  get 'resume', to: 'resume#index', as: 'resume'
  get 'v', to: 'v#index', as: 'v'
  root 'page#index'
end
