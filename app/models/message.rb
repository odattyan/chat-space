class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group

  validates :body, presece: true, unless: :image?

  mount_uploader :image, ImageUploader
end
