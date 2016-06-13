class CreateLessons < ActiveRecord::Migration
  def change
    create_table :lessons do |t|
      t.string :exercice
      t.string :translation
      t.integer :level

      t.timestamps null: false
    end
  end
end
