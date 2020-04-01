# DB設計
## uers table
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, uniue: true|
|name|string|index: true, null: false, unique: true|
|mail|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :messages
- has_many :groups, through: :groups_users

## messages table
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groups table
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, unique: true|
|name|string|null: false|
### Association
- has_many :massages
- has_many :users, through: :groups_users

## groups-users table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user