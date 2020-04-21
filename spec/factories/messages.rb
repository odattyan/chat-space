FactoryBot.define do

  factory :message do
    image {File.open("#{Rails.root}/public/images/test_image.jpg")}
    body {Faker::Lorem.sentence}
    group
    user
  end
end